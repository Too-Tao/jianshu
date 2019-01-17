import {
  createGlobalStyle
} from 'styled-components'

export const GlobalStyled = createGlobalStyle `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {font-family: "iconfont";
src: url('./statics/iconfont/iconfont.eot?t=1547428898135'); /* IE9 */
src: url('./statics/iconfont/iconfont.eot?t=1547428898135#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAP0AAsAAAAACBgAAAOlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDWIMuATYCJAMQCwoABCAFhG0HRBscB8geIXOS0tPTU1VPi4B+v7ZPvtwd4kmSaGRo4pmkUaWRCQliIxSihuQl8Pdt5gPCCmTVqdmKO6RikU9Eh/ysaFIxv5nqqT1lenJJAwTIpfaJwz23LAtkPstyGmvqntRFXYDR2BrY3tYGCbgPgn8Yu/IizhPQNGw8Yq2yvh18ZMa0gHCp1yrBJ2WQa9KDWlCWrM0QHoFWx4XkPQAP/t+HP0jNB0RFAuOizeMKDRR/Zr5xU06PE6YmFzjHs4FtImEGyITTUsc+KgzMoDSVwTJzQK0WGaun643b40GivShq00ns/c8LJRipbWAWBhOfmTaHyGeXoEzphqIbOCuDGi08AM9gUAe9MMqKAbmPTxgbK6OYwF7h4kvixQvh2bP258/5xS+L+LWL926WXr5UJHkFT3nxIoAR5O2MkZ00eV08syVyovIsuxigGZhLzKIHhEuhcPl75vPHdoHz7OKrBNEr7Fk0Gq8JXR9qD5joXMuqF0esiVgP9u/c65LzGqFdwXe2C4r1i8P4tU6bi1gcEce41i0KbV/TcE7WjtyLF+nhKJdceOTIQkdKUiO5EM/PRcObL17cEJUWd2EFaVyxwoh05IqwAH03XBKrHo8uf4z8PaqyF4bCJp4sVekLX8r+FNrx9ewkgi5JtI4R9H7T2LriXPd0Bb4bFfYnesSnEfFQuNP793dWd27fXhERTlB0ZITcI4+K8koJBNVGRdC2beXeY8+fv31rLx7yI/DUzp23Nzscz55jR2dkZ5/syO6LAG13//6FRk+kN1wOtwD/f9MgRWmedCnklEG6/7Xj7L1U4hkB+d982Gur+lDRQ5GonRL+j7C18EcKW5ZkVWwYc5YltkC7KptHg4imJn5fhB6vx3D1g9gW1FwIEVWGkNRGCJkyg0LLLEq1RTRNq9rc0ktCCdkXmDIXIOhyEFGHJyRd7hMy5RUKA96h1BWFpq0QsmfLWHqmTEJKjDScqpvTq60W0TJjJkhvRVqHSSklxT5dQJJd7+ZSEpOz4SpkQdIYC+wd2lSMRU6UrGauElyGTCYrZ5OsBqTGiTqMbblJSWLZhxLVVjMwVkkQJQzR4Kh04+ipWVmIbmWMyf2+FaLlYKIk1RRVuAWIxE7fPydFouQWhCqFpVXRtdxi10ErFYaJOCKJlRmnEtgQkxmw4tjKRxkgalgiXQ+fTa4kVE5sq0icX2V+wk3QZOyTA0lQhIygoXmstGg1SoPezSNLlD42pWXGTegBAAAAAA==') format('woff2'),
url('./statics/iconfont/iconfont.woff?t=1547428898135') format('woff'),
url('./statics/iconfont/iconfont.ttf?t=1547428898135') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
url('./statics/iconfont/iconfont.svg?t=1547428898135#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`