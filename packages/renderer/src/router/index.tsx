import { lazy, ReactNode, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

const Upload = lazy(() => import('../pages/upload'));

const lazyLoad = (children: ReactNode): ReactNode => {
  return (
    <Suspense fallback={<>loading...</>}>
      {children}
    </Suspense>
  )
}

interface RouterProps extends RouteObject {
  title?: string;
  children?: RouterProps[];
}

const router: RouterProps[] = [
  {
    path: '/',
    element: lazyLoad(<Upload />),
  }
];

export default router;