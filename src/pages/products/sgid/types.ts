import type { Props as SectionProps } from '@components/pages/Section.astro';

export interface IDataCategory {
  metadata: IMetadata;
  url: string;
}

export enum SgidCategory {
  ADDRESS = 'Address',
  AERIAL_PHOTOGRAPHY = 'Aerial-Photography',
  BIOSCIENCE = 'Bioscience',
  BOUNDARIES = 'Boundaries',
  CADASTRE = 'Cadastre',
  CLIMATE = 'Climate',
  CONTOURS = 'Contours',
  DEMOGRAPHIC = 'Demographic',
  ECONOMY = 'Economy',
  ELEVATION = 'Elevation',
  EMERGENCY = 'Emergency',
  ENERGY = 'Energy',
  ENVIRONMENT = 'Environment',
  FARMING = 'Farming',
  GEOSCIENCE = 'Geoscience',
  HEALTH = 'Health',
  HISTORY = 'History',
  INDICES = 'Indices',
  LOCATION = 'Location',
  PLANNING = 'Planning',
  POLITICAL = 'Political',
  RECREATION = 'Recreation',
  SOCIETY = 'Society',
  TOPO = 'Topo',
  TRANSPORTATION = 'Transportation',
  UTILITIES = 'Utilities',
  WATER = 'Water',
}

type OptionalPick<T, K extends PropertyKey> = Pick<T, Extract<keyof T, K>>
export interface IStandardPageMetadata {
  title: string;
  pillar?: string;
  section: OptionalPick<SectionProps, 'title' | 'subTitle' | 'actionUrl' | 'actionText'>[];
}

export interface IMetadata {
  title: string;
  stewards: string[];
  type: ProductType;
  description: string;
  category: SgidCategory;
  secondaryCategory?: SgidCategory;
}

export interface IPageMetadata extends IMetadata {
  application?: string;
  updateHistory: string[];
  hub?: IHubDownload;
  links?: IDownloadLink[];
}

export interface IDownloadLink {
  title: string;
  url: string;
}

export enum ProductType {
  TABLE,
  POINT,
  POLYLINE,
  POLYGON,
  WEB_SERVICE,
  WEB_MAP,
  DESKTOP_APPLICATION,
  DISCOVER_SERVICE,
}

export interface IHubDownload {
  itemId: string;
  name: string;
  featureServiceId: string;
  openSgid?: string;
  layerId?: number;
  externalHubOrganization?: string;
  oddHubName?: string;
  type: ProductType;
}
