import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req.url,'url');
  const authReq = req.clone({
    headers : req.headers.set('Auth','Bearer djskfsjfksjdfk')
  })
  return next(authReq);
};
