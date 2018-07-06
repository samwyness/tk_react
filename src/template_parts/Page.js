import React, { Component } from 'react';

import Splash from './components/Splash';

export default class Page extends Component {
  constructor( props ) {
      super( props )
      this.state = {
          page_data: false
      }
  }

  componentDidMount() {
      // TODO: Move this fetch to index.js and handle post slug dynamically
      //       then we can pass page data down as props.
      let page_slug = this.props.location.pathname;

      fetch( __TK__.urls.wp_api + '/pages?slug=' + page_slug )
      .then( response => response.json() )
      .then( json => {
          this.setState( {
              page_data: json[0] || false
          } );
      } )
      .catch( error => { console.log( error ) } );
  }

  shouldComponentUpdate( nextProps, nextState ) {
      if (!nextState.page_data) {
          this.setState( {
              page_data: {
                  title: { rendered: 'Page Template' }
              }
          } );

          return false;
      }

      return true;
  }

  createPageContentMarkup() {
      let content = (this.state.page_data.content) ? this.state.page_data.content.rendered : '';
      return {__html: content};
  }

  render() {
      let page_data = this.state.page_data || false;
      let page_title = (page_data) ? page_data.title.rendered : false;

      return (
          <div className="tk-content">

              <Splash
                  title={page_title}
              />

              <div className="container">

                  <div dangerouslySetInnerHTML={this.createPageContentMarkup()}></div>

              </div>

          </div>
      );
  }
}
