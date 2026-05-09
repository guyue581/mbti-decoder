const fs = require('fs');
const path = require('path');

// DOCX 文件本质是一个 ZIP 包，包含 XML 文件
// 我们用 Node.js 原生模块生成

function createDocx(outputPath, title, sections) {
  // 创建临时目录
  const tempDir = path.join(path.dirname(outputPath), '_docx_temp');
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true });
  }
  fs.mkdirSync(tempDir, { recursive: true });

  // [Content_Types].xml
  const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>`;
  fs.writeFileSync(path.join(tempDir, '[Content_Types].xml'), contentTypes, 'utf-8');

  // _rels/.rels
  const relsDir = path.join(tempDir, '_rels');
  fs.mkdirSync(relsDir, { recursive: true });
  const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;
  fs.writeFileSync(path.join(relsDir, '.rels'), rels, 'utf-8');

  // word/_rels/document.xml.rels
  const wordDir = path.join(tempDir, 'word');
  fs.mkdirSync(wordDir, { recursive: true });
  const wordRelsDir = path.join(wordDir, '_rels');
  fs.mkdirSync(wordRelsDir, { recursive: true });
  const docRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`;
  fs.writeFileSync(path.join(wordRelsDir, 'document.xml.rels'), docRels, 'utf-8');

  // word/styles.xml
  const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:rPr>
      <w:rFonts w:ascii="微软雅黑" w:eastAsia="微软雅黑"/>
      <w:sz w:val="22"/>
      <w:szCs w:val="22"/>
    </w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading1">
    <w:rPr>
      <w:rFonts w:ascii="微软雅黑" w:eastAsia="微软雅黑"/>
      <w:b/>
      <w:sz w:val="36"/>
      <w:szCs w:val="36"/>
      <w:color w:val="2B579A"/>
    </w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading2">
    <w:rPr>
      <w:rFonts w:ascii="微软雅黑" w:eastAsia="微软雅黑"/>
      <w:b/>
      <w:sz w:val="28"/>
      <w:szCs w:val="28"/>
      <w:color w:val="2B579A"/>
    </w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading3">
    <w:rPr>
      <w:rFonts w:ascii="微软雅黑" w:eastAsia="微软雅黑"/>
      <w:b/>
      <w:sz w:val="24"/>
      <w:szCs w:val="24"/>
    </w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Code">
    <w:rPr>
      <w:rFonts w:ascii="Consolas" w:eastAsia="微软雅黑"/>
      <w:sz w:val="20"/>
      <w:szCs w:val="20"/>
      <w:shd w:fill="F5F5F5"/>
    </w:rPr>
  </w:style>
</w:styles>`;
  fs.writeFileSync(path.join(wordDir, 'styles.xml'), styles, 'utf-8');

  // 构建 document.xml body
  let bodyXml = '';

  // 标题
  bodyXml += `<w:p><w:pPr><w:pStyle w:val="Heading1"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="微软雅黑" w:eastAsia="微软雅黑"/><w:b/><w:sz w:val="48"/><w:szCs w:val="48"/></w:rPr><w:t>${