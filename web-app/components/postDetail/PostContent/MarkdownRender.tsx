import { FC } from "react";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import styled from '@emotion/styled';
import sanitize from 'sanitize-html';
import katexWhitelist from './katexWhitelist';


interface MarkdownRender{
  markdown : string
}
const MarkdownRender:FC<MarkdownRender> = ({markdown}) => {
  return(
    <Block>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]} >{filter(markdown)}</ReactMarkdown>
    </Block>
  )
}

export default MarkdownRender;

function filter(html: string) {
  return sanitize(html, {
    allowedTags: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'p',
      'a',
      'ul',
      'ol',
      'nl',
      'li',
      'b',
      'i',
      'strong',
      'em',
      'strike',
      'code',
      'hr',
      'br',
      'div',
      'table',
      'thead',
      'caption',
      'tbody',
      'tr',
      'th',
      'td',
      'pre',
      'iframe',
      'span',
      'img',
      'del',
      'input',
      ...katexWhitelist.tags,
    ],
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      img: ['src'],
      iframe: ['src', 'allow', 'allowfullscreen', 'scrolling', 'class'],
      '*': ['class', 'id', 'aria-hidden'],
      span: ['style'],
      input: ['type'],
      ol: ['start'],
      ...katexWhitelist.attributes,
    },
    allowedStyles: {
      '*': {
        color: [
          /^#(0x)?[0-9a-f]+$/i,
          /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
        ],
        'text-align': [/^left$/, /^right$/, /^center$/],
      },
      span: {
        ...katexWhitelist.styles,
      },
    },
    allowedIframeHostnames: ['www.youtube.com', 'codesandbox.io', 'codepen.io'],
  }).replace(/&gt;/g, '>');
}

const Block = styled.div`
  & ul, ol{
    padding-left: 32px;
  }
  & details, dl, ol, pre, table, ul, p{
    margin-bottom: 16px;
  }
  & p {
    color: #222426;
  }
  & h1, h2, h3, h4, h5, h6{
    margin-top: 24px;
    margin-bottom: 16px;
    color: #222426;
  }
  & img{
    max-width: 100%;
  }
  & table{
    width: max-content;
    max-width: 100%;
    overflow: auto;
    border-spacing: 0;
    border-collapse: collapse;
    & tr{
      background-color: #fff;
      border-top: 1px solid #c6cbd2;
    }
    & td, th{
      border: 1px solid #e0e3e6;
      padding: 6px 13px;
    }
  }
`