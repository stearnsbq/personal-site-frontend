export interface IAboutMe{
    about: string;
    education: IEducation[];
    experience: IExperience[];
    certsAndLicenses: ICertsAndLicenses[];
}


export interface IEducation {
    degree: string;
    school: string;
    start: Date;
    end?: Date;
}


export interface IExperience {
    title: string;
    company: string;
    start: Date;
    end?: Date;
    bullets: string[];
}


export interface ICertsAndLicenses {
    title: string;
    description: string;
    acquired: Date;
    expiration?: Date;
  }