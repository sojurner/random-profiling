type AppBarClassName = string | 'main__appBar';

export interface IAppBarProps extends React.HTMLProps<HTMLHeadingElement> {
  className: AppBarClassName;
}
