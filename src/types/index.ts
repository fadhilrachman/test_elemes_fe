import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface BaseResponseType<T> {
  page: number;
  results: T[];
}
