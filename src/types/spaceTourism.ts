export interface ImageSet {
  png?: string;
  webp?: string;
  portrait?: string;
  landscape?: string;
}

export interface DestinationItem {
  name: string;
  images: Required<Pick<ImageSet, "png" | "webp">>;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewMember {
  name: string;
  images: Required<Pick<ImageSet, "png" | "webp">>;
  role: string;
  bio: string;
}

export interface TechnologyItem {
  name: string;
  images: Required<Pick<ImageSet, "portrait" | "landscape">>;
  description: string;
}

export interface SpaceTourismData {
  destinations: DestinationItem[];
  crew: CrewMember[];
  technology: TechnologyItem[];
}

export interface NavItem {
  number: string;
  label: string;
  path: string;
}

export interface PageTitleProps {
  number: string;
  title: string;
}
