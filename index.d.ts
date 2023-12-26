
export interface NavbarItemProps {
    label: string;
}

export interface MobileMenuProps {
    visible?: boolean;
}


export enum Gender {
    Male = 'male',
    Female = 'female',
}

export interface UserRow {
    user_id: number;
    email: string;
    username: string;
    password: string;
    gender: Gender;
    birthday: Date | null;
    profile_photo: string | null;
    is_admin: boolean;
    created_at: Date;
    updated_at: Date;
}