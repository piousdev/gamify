import {PrismaClient, VisibilityStatus} from '@prisma/client';

const prisma = new PrismaClient();

export async function createGame(
    userId: string,
    name: string,
    playLocationLink: string,
    thumbnailImage: string,
    apiKey: string,
    visibilityStatus: VisibilityStatus
) {
    try {
        return await prisma.game.create({
            data: {
                userId,
                name,
                playLocationLink,
                thumbnailImage,
                apiKey,
                visibilityStatus,
            },
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}
