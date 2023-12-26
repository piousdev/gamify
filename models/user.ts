import { Gender } from "@/index";


export class User {
    private readonly userId: number;
    private email: string;
    private username: string;
    private password: string;
    private gender: Gender;
    private birthday: Date | null;
    private profilePhoto: string | null;
    private isAdmin: boolean;
    private readonly createdAt: Date;
    private updatedAt: Date;

    constructor(
        userId: number,
        email: string,
        username: string,
        password: string,
        gender: Gender,
        birthday: Date | null,
        profilePhoto: string | null,
        isAdmin: boolean,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.userId = userId;
        this.email = email;
        this.username = username;
        this.password = password;
        this.gender = gender;
        this.birthday = birthday;
        this.profilePhoto = profilePhoto;
        this.isAdmin = isAdmin;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getUserId() {
        return this.userId;
    }

    getEmail() {
        return this.email;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getGender() {
        return this.gender;
    }

    getBirthday() {
        return this.birthday;
    }

    getProfilePhoto() {
        return this.profilePhoto;
    }

    getIsAdmin() {
        return this.isAdmin;
    }

    getCreatedAt() {
        return this.createdAt;
    }

    getUpdatedAt() {
        return this.updatedAt;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setUsername(username: string) {
        this.username = username;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setGender(gender: Gender) {
        this.gender = gender;
    }

    setBirthday(birthday: Date | null) {
        this.birthday = birthday;
    }

    setProfilePhoto(profilePhoto: string | null) {
        this.profilePhoto = profilePhoto;
    }

    setIsAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin;
    }

    setUpdatedAt(updatedAt: Date) {
        this.updatedAt = updatedAt;
    }
}