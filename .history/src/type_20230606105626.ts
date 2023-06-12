export interface BadgeInterface {
  text: string;
  filled?: boolean;
}

export interface ButtonInterface {
  text: string;
  type: string;
  href: string;
  icon?: JSX.Element;
  filled?: boolean;
}

export interface CardInterface {
  indicator?: string,
  badge?: Bad
}