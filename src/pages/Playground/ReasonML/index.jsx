/* @flow */

import * as React from 'react'
import { Helmet } from 'react-helmet'
import cx from 'classnames'
import Article from 'components/Article'
import SourceCode from 'components/SourceCode'
import CreativeCommons from 'components/CreativeCommons'
import { make as ImageData } from './ImageData.bs'
import ImageDataSource from '!raw-loader!./ImageData.re'

type Props = {
  id?: string,
  className: string,
}

class PureScript extends React.PureComponent<Props> {
  static defaultProps = {
    className: '',
  }

  render() {
    const { id, className } = this.props
    const classes = cx('playground-reasonml', className)

    return (
      <Article id={id} className={classes}>
        <Helmet>
          <title>ReasonML - caasih.net</title>
        </Helmet>
        <h1>ReasonML</h1>
        <p>參考 <a href="https://dev.to/yakimych/adding-reasonml-to-an-existing-codebase-part-1-3kkg">Adding ReasonML to an existing codebase (Part 1)</a>，現在除了 PureScript 外，還可以同時以 OCaml/ReasonML 寫 React 元件 XD</p>
        <ImageData />
        <div style={{ textAlign: 'center', color: '#666' }}>
          <a href="https://www.flickr.com/photos/84175980@N00/6595168855">"20111227 nigel"</a> by <a href="https://www.flickr.com/photos/84175980@N00">schizoform</a> is licensed under <a href="https://creativecommons.org/licenses/by/2.0"> CC BY 2.0 </a>
        </div>
        <SourceCode open language="reasonml">
          {ImageDataSource}
        </SourceCode>
        <CreativeCommons size="compact" type="by" />
      </Article>
    )
  }
}

export default PureScript