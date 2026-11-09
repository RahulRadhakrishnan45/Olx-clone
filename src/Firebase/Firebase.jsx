import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm-uxjjZriYmB7o2vpEizWk7aRvJN5iDM",
  authDomain: "olx-clone-ac13e.firebaseapp.com",
  projectId: "olx-clone-ac13e",
  storageBucket: "olx-clone-ac13e.firebasestorage.app",
  messagingSenderId: "1035721740434",
  appId: "1:1035721740434:web:1b829948ab704adc3ad64b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage =  getStorage();
const fireStore = getFirestore();


const fetchFromFirestore = async() => {
  try {
    const productsCollection = collection(fireStore, 'products');
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id, ...doc.data()
    }));
    console.log('Products List:', productsList);
    return productsList;

    } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export { auth, provider, storage, fireStore, fetchFromFirestore };
