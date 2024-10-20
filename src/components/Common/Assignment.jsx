import React, { useState } from 'react';
import Modal from '../Modal/Modal'; 

const Assignment = () => {
    const [activeTab, setActiveTab] = useState('post');
    const [pendingPosts, setPendingPosts] = useState(['소식1', '소식2', '소식3', '소식4', '소식5', '소식6']);
    const [approvedPosts, setApprovedPosts] = useState(['소식7', '소식8', '소식9', '소식10', '소식11']);
    const [pendingUsers, setPendingUsers] = useState(['임재원', '안주현', '김형진', '김태우', '최서영']);
    const [approvedUsers, setApprovedUsers] = useState(['서영진']);
    const initialVisible = 4;
    const [visiblePendingPosts, setVisiblePendingPosts] = useState(initialVisible);
    const [visibleApprovedPosts, setVisibleApprovedPosts] = useState(initialVisible);
    const [visiblePendingUsers, setVisiblePendingUsers] = useState(initialVisible);
    const [visibleApprovedUsers, setVisibleApprovedUsers] = useState(initialVisible);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalConfirmAction, setModalConfirmAction] = useState(() => {});
    const [isApproval, setIsApproval] = useState(true); 

    const openModal = (message, action, approval) => {
        setModalContent(message);
        setModalConfirmAction(() => action);
        setIsModalOpen(true);
        setIsApproval(approval);
    };

    const approveItem = (index, type) => {
        const item = type === 'post' ? pendingPosts[index] : pendingUsers[index];
        openModal(
            `"${item}"을 승인하시겠습니까?`,
            () => {
                if (type === 'post') {
                    setPendingPosts(pendingPosts.filter((_, i) => i !== index));
                    setApprovedPosts([item, ...approvedPosts]);
                } else if (type === 'user') {
                    setPendingUsers(pendingUsers.filter((_, i) => i !== index));
                    setApprovedUsers([item, ...approvedUsers]);
                }
            },
            true
        );
    };

    const deleteItem = (index, type, approved = false) => {
        const item = approved
            ? type === 'post'
                ? approvedPosts[index]
                : approvedUsers[index]
            : type === 'post'
            ? pendingPosts[index]
            : pendingUsers[index];
        openModal(
            `"${item}"을 삭제하시겠습니까?`,
            () => {
                if (type === 'post') {
                    if (approved) {
                        setApprovedPosts(approvedPosts.filter((_, i) => i !== index));
                    } else {
                        setPendingPosts(pendingPosts.filter((_, i) => i !== index));
                    }
                } else if (type === 'user') {
                    if (approved) {
                        setApprovedUsers(approvedUsers.filter((_, i) => i !== index));
                    } else {
                        setPendingUsers(pendingUsers.filter((_, i) => i !== index));
                    }
                }
            },
            false
        );
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setVisiblePendingPosts(initialVisible);
        setVisibleApprovedPosts(initialVisible);
        setVisiblePendingUsers(initialVisible);
        setVisibleApprovedUsers(initialVisible);
    };

    return (
        <div className="w-full p-5 box-border">
            <div className="flex justify-around mb-5">
                <div
                    onClick={() => handleTabChange('post')}
                    className={`px-4 py-2 cursor-pointer border-b-2 transition-colors ${
                        activeTab === 'post' ? 'border-teal-500 font-bold' : 'border-transparent'
                    }`}
                >
                    게시물 관리
                </div>
                <div
                    onClick={() => handleTabChange('user')}
                    className={`px-4 py-2 cursor-pointer border-b-2 transition-colors ${
                        activeTab === 'user' ? 'border-teal-500 font-bold' : 'border-transparent'
                    }`}
                >
                    사용자 관리
                </div>
            </div>

            {activeTab === 'post' && (
                <div className="flex justify-around mt-4 space-x-4">
                    <div className="w-1/2 bg-gray-50 p-4 rounded-lg shadow-md">
                        <div className="text-lg text-center mb-2 font-semibold">대기중인 게시물</div>
                        <div>
                            {pendingPosts.slice(0, visiblePendingPosts).map((post, index) => (
                                <div key={index} className="flex justify-between items-center py-2">
                                    <span>{post}</span>
                                    <div>
                                        <button
                                            onClick={() => approveItem(index, 'post')}
                                            className="text-blue-400 px-3 py-1 rounded mr-2 border-2 border-transparent hover:border-blue-400"
                                        >
                                            승인
                                        </button>
                                        <button
                                            onClick={() => deleteItem(index, 'post')}
                                            className="text-red-400 px-3 py-1 rounded mr-2 border-2 border-transparent hover:border-red-400"
                                        >
                                            삭제
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {visiblePendingPosts < pendingPosts.length && (
                                <button
                                    onClick={() => setVisiblePendingPosts(visiblePendingPosts + 4)}
                                    className="text-blue-500 w-full text-center"
                                >
                                    더보기
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="w-1/2 bg-gray-50 p-4 rounded-lg shadow-md">
                        <div className="text-lg text-center mb-2 font-semibold">승인된 게시물</div>
                        <div>
                            {approvedPosts.slice(0, visibleApprovedPosts).map((post, index) => (
                                <div key={index} className="flex justify-between items-center py-2">
                                    <span>{post}</span>
                                    <button
                                        onClick={() => deleteItem(index, 'post', true)}
                                        className="text-red-400 px-3 py-1 rounded mr-2 border-2 border-transparent hover:border-red-400"
                                    >
                                        삭제
                                    </button>
                                </div>
                            ))}
                            {visibleApprovedPosts < approvedPosts.length && (
                                <button
                                    onClick={() => setVisibleApprovedPosts(visibleApprovedPosts + 4)}
                                    className="text-blue-500 w-full text-center"
                                >
                                    더보기
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'user' && (
                <div className="flex justify-around mt-4 space-x-4">
                    <div className="w-1/2 bg-gray-50 p-4 rounded-lg shadow-md">
                        <div className="text-lg text-center mb-2 font-semibold">대기중인 사용자</div>
                        <div>
                            {pendingUsers.slice(0, visiblePendingUsers).map((user, index) => (
                                <div key={index} className="flex justify-between items-center py-2">
                                    <span>{user}</span>
                                    <div>
                                        <button
                                            onClick={() => approveItem(index, 'user')}
                                            className="text-blue-400 px-3 py-1 rounded mr-2 border-2 border-transparent hover:border-blue-400"
                                        >
                                            승인
                                        </button>
                                        <button
                                            onClick={() => deleteItem(index, 'user')}
                                            className="text-red-400 px-3 py-1 rounded mr-2 border-2 border-transparent hover:border-red-400"
                                        >
                                            삭제
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {visiblePendingUsers < pendingUsers.length && (
                                <button
                                    onClick={() => setVisiblePendingUsers(visiblePendingUsers + 4)}
                                    className="text-blue-500 w-full text-center"
                                >
                                    더보기
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="w-1/2 bg-gray-50 p-4 rounded-lg shadow-md">
                        <div className="text-lg text-center mb-2 font-semibold">승인된 사용자</div>
                        <div>
                            {approvedUsers.slice(0, visibleApprovedUsers).map((user, index) => (
                                <div key={index} className="flex justify-between items-center py-2">
                                    <span>{user}</span>
                                    <button
                                        onClick={() => deleteItem(index, 'user', true)}
                                        className="text-red-400 px-3 py-1 rounded mr-2 border-2 border-transparent hover:border-red-400"
                                    >
                                        삭제
                                    </button>
                                </div>
                            ))}
                            {visibleApprovedUsers < approvedUsers.length && (
                                <button
                                    onClick={() => setVisibleApprovedUsers(visibleApprovedUsers + 4)}
                                    className="text-blue-500 w-full text-center"
                                >
                                    더보기
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                children={
                    <div className="text-center">
                        <p>{modalContent}</p>
                        <button
                            onClick={() => {
                                modalConfirmAction();
                                setIsModalOpen(false);
                            }}
                            className={`mt-4 px-4 py-2 rounded text-white ${isApproval ? 'bg-blue-500' : 'bg-red-500'}`}
                        >
                            확인
                        </button>
                    </div>
                }
            />
        </div>
    );
};

export default Assignment;
