import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.less'
import index from 'pages/index'
import Tools from 'pages/tools'
import Music from 'pages/music'
import Editor from 'pages/editor'

const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
        <Route path="/index" component={index} />
        <Route path="/tools" component={Tools} />
        <Route path="/music" component={Music} />
        <Route path="/editor" component={Editor} />
      </Content>
    );
  }
}