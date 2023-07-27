import Interests from '../models/Interests';

export async function getClientInterestsById(interestsId: string) {
    return await Interests.findById(interestsId).exec();
}

export async function createInterests(
    personalInterests: string[],
    preferredDestinations: string[],
    roomType: string,
    monthlyIncome: string,
    yearlyTravels: string,
    favoriteBooks: string
) {
    const newInterests = {
        personalInterests,
        preferredDestinations,
        roomType,
        monthlyIncome,
        yearlyTravels,
        favoriteBooks
    };
    return await Interests.create(newInterests);
}

export async function deleteInterests(interestsId: string) {
    await Interests.deleteOne({_id: interestsId});
}
