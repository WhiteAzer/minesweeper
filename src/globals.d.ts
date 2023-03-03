declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}