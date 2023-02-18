import Bio from '../models/bio';

export class BioService {
  static async update(userId: string, bio: Bio): Promise<number> {
    const updatedBio = await Bio.update(
      {
        gender: bio.gender,
        countryOfBirth: bio.countryOfBirth,
        currentNationality: bio.currentNationality,
        placeOfResidence: bio.placeOfResidence,
        dateOfBirth: new Date(bio.dateOfBirth)
      },
      { where: { userId: userId } }
    );

    return updatedBio[0];
  }
}
