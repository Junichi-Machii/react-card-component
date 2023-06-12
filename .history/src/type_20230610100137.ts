export interface BadgeInterface {
  text: string;
  filled?: boolean;
  icon?: JSX.Element;
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
  badge?: BadgeInterface,
  image?: string,
  title: string,
  subtitle?: string,
  body: string,
  btn: ButtonInterface
}