// 压缩图片文件
async function compressImage(inputPath, outputPath, options) {
  await sharp(inputPath)
      .resize(options.width, options.height)
      .toFile(outputPath);
}

const cheerio = require('cheerio');
const htmlparser2 = require('htmlparser2');
const xpath = require('xpath');
const DomParser = require('xmldom').DOMParser;
const htmlMinifier = require('html-minifier');

// 提取网页内容中的所有链接
function extractLinks(htmlContent) {
  const $ = cheerio.load(htmlContent);
  const links = [];
  $('a').each((index, element) => {
      links.push($(element).attr('href'));
  });
  return links;
}