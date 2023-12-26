import db from '../lib/db';
import { User } from '@/models/user';
import {Gender, UserRow} from "@/index";


export class UserRepository {
    static async create(userData: {
        email: string,
        username: string,
        password: string,
        gender: Gender,
        birthday: Date | null,
        profilePhoto: string | null,
        isAdmin: boolean
    }): Promise<User> {
        const { email, username, password, gender, birthday, profilePhoto, isAdmin } = userData;
        const [result] = await db.query(
            `INSERT INTO users (email, username, password, gender, birthday, profile_photo, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [email, username, password, gender, birthday, profilePhoto, isAdmin]
        ) as [{ insertId: number }, any];

        return new User(result.insertId, email, username, password, gender, birthday, profilePhoto, isAdmin, new Date(), new Date());
    }

    static async findById(userId: number): Promise<User | null> {
        const [rows] = await db.query(`SELECT * FROM users WHERE user_id = ?`, [userId]) as [UserRow[], any];
        if (rows.length) {
            const row = rows[0];
            return new User(row.user_id, row.email, row.username, row.password, row.gender, row.birthday, row.profile_photo, row.is_admin, row.created_at, row.updated_at);
        }
        return null;
    }

    static async findAll(): Promise<User[]> {
        const [rows] = await db.query(`SELECT * FROM users`) as [UserRow[], any];
        return rows.map(row => new User(row.user_id, row.email, row.username, row.password, row.gender, row.birthday, row.profile_photo, row.is_admin, row.created_at, row.updated_at));
    }

    async save(user: User): Promise<void> {
        await db.query(
            `UPDATE users SET email = ?, username = ?, password = ?, gender = ?, birthday = ?, profile_photo = ?, is_admin = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?`,
            [user.getEmail(), user.getUsername(), user.getPassword(), user.getGender(), user.getBirthday(), user.getProfilePhoto(), user.getIsAdmin(), user.getUserId()]
        );
    }

    async delete(userId: number): Promise<void> {
        await db.query(`DELETE FROM users WHERE user_id = ?`, [userId]);
    }
}