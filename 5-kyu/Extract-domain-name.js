function domainName(url) {
  //your code here
  let domainN;

  if (url.includes('www.'))
    domainN = url.slice(
      url.indexOf('.') + 1,
      url.indexOf('.', url.indexOf('.') + 1)
    );
  else if (url.includes('http') || url.includes('https'))
    domainN = url.slice(url.indexOf('/') + 2, url.indexOf('.'));
  else domainN = url.slice(0, url.indexOf('.'));

  return domainN;
}
