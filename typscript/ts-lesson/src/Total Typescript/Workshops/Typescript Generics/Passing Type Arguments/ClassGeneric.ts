class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

const cloneComponent = <T>(component: Component<T>) => {
  return new Component(component.getProps());
};

const component = new Component({ a: 1, b: 2 });
const clonedComponent = cloneComponent(component);
console.log(clonedComponent.getProps());
