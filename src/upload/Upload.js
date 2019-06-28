import React, { Component } from 'react';
import {Upload, Button, Icon, message }  from 'antd';

export default class UploadPage extends Component {

    constructor(props) {
        super(props);
        this.setState({
            fileList: [],
            uploading: false,
        })
    }

    render() {

        return (
            <div>
                <Upload>
                    <Button>
                        <Icon type="upload"/> Select File
                    </Button>
                </Upload>
                <Button
                    type="primary"
                    onClick={this.handleUpload}
                    disabled={this.state.fileList.length === 0}
                    loading={this.state.uploading}
                    style={{marginTop: 16}}>
                    {this.state.uploading ? 'Uploading' : 'Start Upload'}
                </Button>
            </div>
        );
    }
}