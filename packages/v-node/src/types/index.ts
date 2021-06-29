type VNode = {
  _isVNode: true;
  el: Element | null;
  flags: VNodeFlags;
  tag: string | FunctionalComponent | ComponentClass | null;
  data: VNodeData | null;
  children: VNodeChildren;
  childFlags: ChildrenFlags;
}