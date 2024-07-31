import { baseUrl, createToken } from '../../utils/constants';
import { UserRegister } from '../../utils/types';
import { AppDispatch } from '../../app/store';
import { putUser } from '../slices/userSlice';
import { putToken } from '../slices/tokenSlice';

export const registerUser = (user: UserRegister) => {

    const userData = {
        userName: user.login,
        password: user.password,
        name: user.firstName,
        surname: user.lastName,
        phoneNumber: user.number,
        email: user.email
    };

    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(`${baseUrl}/auth/register`, {
                method: 'Post',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`wrong response from server (${response.status})`)
            }
            const data = await response.json();
            dispatch(putUser(data));
            dispatch(putToken(createToken(user.login, user.password)));
        } catch (e: any) {
            alert(e.massage)
        }
    }
}

export const fetchUser = (token: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(`${baseUrl}/auth/login`, {
                method: 'Post',
                headers: {
                    Authorization: token
                }
            })
            if (!response.ok) {
                throw new Error(`wrong response from server (${response.status})`)
            }
            const data = await response.json();
            dispatch(putUser(data));
            dispatch(putToken(token));
        } catch (e: any) {
            alert(e.massage)
        }
    }
}
