export interface IAboutMe{
    about: string;
    education: IEducation[];
    experience: IExperience[];
    certsAndLicenses: ICertsAndLicenses[];
}


export interface IEducation {
    degree: string;
    school: string;
    start: string;
    end?: string;
}


export interface IExperience {
    title: string;
    company: string;
    start: string;
    end?: string;
    bullets: string[];
}


export interface ICertsAndLicenses {
    title: string;
    credential: string;
    description: string;
    acquired: string;
    expiration?: string;
  }