var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "tltk-3",
  "level": "1",
  "url": "tltk-3.html",
  "type": "Mặt Trước",
  "number": "",
  "title": "Mặt Trước",
  "body": "  Phạm Công Vinh vinhpcdev@gmail.com       Tất cả các tài liệu tham khảo của dự án Mainichi Kanji .   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Mục",
  "number": "1",
  "title": "My First Section",
  "body": " My First Section   Some words    My First Subsection  Some more words  foo   A frog    A nice-looking frog with a longish description.     Bar:    "
},
{
  "id": "subsection-1-4",
  "level": "2",
  "url": "section-1.html#subsection-1-4",
  "type": "Figure",
  "number": "1.1",
  "title": "",
  "body": " A frog    A nice-looking frog with a longish description.    "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Mục",
  "number": "2",
  "title": "My Additional Section",
  "body": " My Additional Section  foo  bar  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
