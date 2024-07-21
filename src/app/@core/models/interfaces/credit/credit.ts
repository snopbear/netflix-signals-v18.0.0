export interface ICreditsDto {
  cast: IActor[];
}

export interface IActor {
  profile_path: string;
  name: string;
  character: string;
}
