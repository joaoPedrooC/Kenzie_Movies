import { create } from 'zustand';
import { api } from '../services/api';
import { User, UserCreate, UserLogin } from '../interfaces/UserInterfaces';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';

interface UserStoreInterface {
  user: User | null;
  login: (userInfo: UserLogin, setLoading: React.Dispatch<React.SetStateAction<boolean>>, navigate: NavigateFunction) => void;
  createUser: (userInfo: UserCreate, setLoading: React.Dispatch<React.SetStateAction<boolean>>, navigate: NavigateFunction) => void;
  logout: (navigate: NavigateFunction) => void;
}

export const useUserStore = create<UserStoreInterface>((set) => ({
  user: null,
  login: async (userInfo, setLoading, navigate) => {
    try {
      setLoading(true);

      const { data } = await api.post('/login', userInfo);
    
      localStorage.setItem('@KenzieMovieToken', data.accessToken);
      localStorage.setItem('@KenzieMovieUserId', data.user.id);

      set({ user: data.user });
      navigate('/');
    } catch (error) {
      toast.error('E-mail e/ou senha inválidos!');
    } finally {
      setLoading(false);
    }
  },
  createUser: async (userInfo, setLoading, navigate) => {
    try {
      setLoading(true);
      await api.post('/users', userInfo);
      toast.success('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (error: any) {
      if(error.response.status === 400) {
        toast.error('E-mail já cadastrado!');
      } else {
        toast.error('Erro interno, tente novamente mais tarde!');
      }
    } finally {
      setLoading(false);
    }
  },
  logout: async (navigate) => {
    localStorage.removeItem('@KenzieMovieToken');
    localStorage.removeItem('@KenzieMovieUserId');

    toast.info('Deslogando...');

    set({ user: null });
    navigate('/');
  }
}));