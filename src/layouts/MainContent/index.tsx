import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Active from '../../components/Active';
import Guest from '../../components/Guest';

const MainContent = () => {
    return (
        <div>
                <Routes>
                    <Route element={<h1>Home</h1>} path="/" />
                    <Route element={<Guest />} path="/login" />
                    <Route element={<Active />} path="/active" />
                    <Route element={<h1>Contacts</h1>} path="/contacts" />
                    <Route element={<h1>Groups</h1>} path="/groups" />
                    <Route element={<h1>Students</h1>} path="/students" />
                    <Route element={<h1>Lecturers</h1>} path="/lecturers" />
                    <Route element={<h1>Not found!</h1>} />
                </Routes>
        </div>
    );
};

export default MainContent;
