import * as React from 'react';



interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;

  children?: React.ReactNode;
}

export default function ResponsiveDrawer(props: Props) {




  return (props.children);
}
