import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import MyCustomUploadAdapterPlugin from './UploadAdapter';
import { useNavigate } from 'react-router-dom';
import './TextEditor.css';

function withNavigate(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

const editorConfig = {
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
        ],
    },
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'imageUpload', '|', 'bulletedList', 'numberedList'],
};

class TextEditor extends Component {
    state = {
        title: '',
        category: 'research',
        content: '',
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleEditorChange = (event, editor) => {
        const data = editor.getData();
        this.setState({ content: data });
    };

    handleSubmit = () => {
        const { title, category, content } = this.state;
        const { navigate } = this.props; // Assuming withNavigate HOC provides this

        // 유효성 검사
        if (!title.trim()) {
            alert('제목을 입력하세요.');
            return;
        }

        if (!content.trim()) {
            alert('내용을 입력하세요.');
            return;
        }

        console.log(title, category, content);

        fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, category, content }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert('제출되었습니다!');

                // Navigate based on category
                if (category === 'research') {
                    navigate('/research');
                } else if (category === 'news') {
                    navigate('/news');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    render() {
        return (
            <div className="pt-28 pb-10 w-4/5 max-w-screen-lg mx-auto">
                <div className="text-4xl font-bold py-8 border-b-2 border-black mb-8 w-full text-center">
                    게시물 작성
                </div>
                <div className="flex items-center">
                    <div className="font-bold text-gray-700 bg-gray-50 border border-gray-200 p-2 rounded w-24 text-center">
                        제목
                    </div>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        className="flex-1 px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center">
                    <div className="font-bold text-gray-700 bg-gray-50 border border-gray-200 p-2 rounded w-24 text-center">
                        카테고리
                    </div>
                    <select
                        name="category"
                        value={this.state.category}
                        onChange={this.handleInputChange}
                        className="flex-1 px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                        <option value="research">연구분야</option>
                        <option value="news">소식</option>
                    </select>
                </div>
                <div className="flex items-center mb-4">
                    <div className="font-bold text-gray-700 bg-gray-50 border border-gray-200 p-2 rounded w-24 h-[640px] text-center">
                        내용
                    </div>
                    <div className="flex-1">
                        <CKEditor
                            editor={ClassicEditor}
                            config={{
                                ...editorConfig,
                                extraPlugins: [MyCustomUploadAdapterPlugin],
                            }}
                            onChange={this.handleEditorChange}
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-4 mb-20">
                    <button
                        onClick={this.handleSubmit}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        제출
                    </button>
                </div>
            </div>
        );
    }
}

export default withNavigate(TextEditor);
