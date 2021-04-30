import React, { useEffect } from 'react';
import E from 'wangeditor';

const Child = function() {
  let editor: E;
  useEffect(function () {
    editor = new E('#editor');
    editor.create();
    return () => {
      editor.destroy();
    }
  }, []);

  // 获取html
  function getHtml() {
    alert(editor.txt.html())
  }

  // 获取text
  function getText() {
    alert(editor.txt.text())
  }
  return (
    <div>
      <div>Child</div>
      <button onClick={getHtml}>获取html</button>
      <button onClick={getText}>获取text</button>
      <div id="editor" />
    </div>
  );
};

export default Child;
