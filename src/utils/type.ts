export interface ISSRFunction<T> {
  (data: T): JSX.Element;
  getInitProps?: () => Promise<T>;
}
