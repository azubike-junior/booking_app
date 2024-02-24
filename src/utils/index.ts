import axios from 'axios';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Lato, Lora, Open_Sans, Quicksand } from 'next/font/google';
import { storage } from './firebase';




export const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

export const lora = Lora({
  weight: '700',
  subsets: ['latin'],
})

export const lora_small = Lora({
  weight: '400',
  subsets: ['latin'],
})

export const quickSand = Quicksand({
  weight: '500',
  subsets: ['latin'],
})

export const lato_bold = Lato({
  weight: '700',
  subsets: ['latin'],
})

export const open_sans = Open_Sans({
  weight: '500',
  subsets: ['latin'],
})

interface Response {
  status: number | undefined;
  data?: any;
}

export function handleErrorResponse(error: any): Response  {
  let status
  let data
  if (error) {
    if ('status' in error) {
      status = error.status
      data = error.data
      return {
        status,
        data
      };
    }
    
  }
  return {
    status,
    data
  };
}

export function handleSuccessResponse(res: any): Response  {
  let status
  if (res) {
    if ('res' in res) {
      status = res.res
      return {
        status,
      };
    }
    
  }
  return {
    status,
  };
}


export const getItem = (name: string): string => {
  let value: any
    if (typeof window !== "undefined") {
    value = localStorage.getItem(name) || ""
    }
  return value
}

export const setItem = (name: string, value: string) => {
    if (typeof window !== "undefined") {
    localStorage.setItem(name, value)
    }
}

export const _http =  axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  auth: { username:'bookingengine', password:'secretbookingenginesecret' },
  headers: { token: getItem('access_token')}
});

export const firstname = getItem('first_name')

export const uploadImage = (file: any, setImgUrl: any, setLoading: any) => {
  // const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        console.log(snapshot);
        
      },
      (error) => {
        alert(error);
      },

      () => {
        setLoading(false)
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
        });
      }
    );
}

export const uploadLogo = (file: any, setLogoUrl: any, setLogoLoading: any) => {
  // const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        console.log(snapshot);
        
      },
      (error) => {
        alert(error);
      },

      () => {
        setLogoLoading(false)
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setLogoUrl(downloadURL)
        });
      }
    );
}

