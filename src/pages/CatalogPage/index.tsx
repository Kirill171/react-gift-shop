import React, { useEffect, useState } from 'react';
import './index.css';
// import giftImg1 from '@assets/1.jpg';
// import giftImg2 from '@assets/2.jpg';
// import giftImg3 from '@assets/3.jpg';
// import giftImg4 from '@assets/4.jpg';
// import giftImg5 from '@assets/5.jpg';
// import giftImg6 from '@assets/6.jpg';
import { Gift } from '../../types/Gift';
import { db, auth } from '../../firebase/firebaseConfig';
import { collection, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function CatalogPage() {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const fetchGifts = async () => {
      const giftsCollection = collection(db, "Gifts");
      const giftSnapshot = await getDocs(giftsCollection);
      const giftList = giftSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Gift[];

      setGifts(giftList);
      setLoading(false);
    };

    const checkAdminRole = async (uid: string) => {
      const roleDocRef = doc(db, "roles", uid);
      const roleDoc = await getDoc(roleDocRef);
      if (roleDoc.exists()) {
        const roleData = roleDoc.data();
        if (roleData.role === 'admin') {
          setIsAdmin(true);
        }
      } else {
        console.log(`Role document for UID ${uid} does not exist.`);
      }
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        checkAdminRole(user.uid);
      }
    });

    fetchGifts();
  }, []);

  const handlePriceClick = async (giftId: string, currentPrice: number) => {
    if (!isAdmin) return;

    const newPrice = prompt("Введите новую цену", currentPrice.toString());

    if (newPrice && !isNaN(Number(newPrice))) {
      const giftDocRef = doc(db, "Gifts", giftId);
      await updateDoc(giftDocRef, { price: Number(newPrice) });

      setGifts(prevGifts => prevGifts.map(gift =>
        gift.id === giftId ? { ...gift, price: Number(newPrice) } : gift
      ));
    }
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <hr className='hr catalog-hr' />
      <section className="catalog-container">
        {gifts.map(gift => (
          <div className="gift" key={gift.id}>
            <img className='gift-image' src={gift.imageUrl} alt={`Фото подарка ${gift.name}`} />
            <h4 className='catalog-h4-text'>{gift.name}</h4>
            <span
              className='catalog-span'
              onClick={() => isAdmin && handlePriceClick(gift.id, gift.price)}
              style={{ cursor: isAdmin ? 'pointer' : 'default' }}
            >
              {gift.price}₽
            </span>
            <button className='catalog-button'>Заказать</button>
          </div>
        ))}
        {/* <div className="gift">
          <img className='gift-image' src={giftImg1} alt="Фото подарка 1" />
          <h4 className="catalog-h4-text">Индивидуальный сюрприз</h4>
          <span className='catalog-span'>1 500₽</span>
          <button className='catalog-button'>Заказать</button>
        </div>
        <div className="gift">
          <img className='gift-image' src={giftImg2} alt="Фото подарка 2" />
          <h4 className="catalog-h4-text">Новогодний подарок</h4>
          <span className='catalog-span'>1 000₽</span>
          <button className='catalog-button'>Заказать</button>
        </div>
        <div className="gift">
          <img className='gift-image' src={giftImg3} alt="Фото подарка 3" />
          <h4 className="catalog-h4-text">День рождения</h4>
          <span className='catalog-span'>500₽</span>
          <button className='catalog-button'>Заказать</button>
        </div>
        <div className="gift">
          <img className='gift-image' src={giftImg4} alt="Фото подарка 4" />
          <h4 className="catalog-h4-text">Весений подарок</h4>
          <span className='catalog-span'>900₽</span>
          <button className='catalog-button'>Заказать</button>
        </div>
        <div className="gift">
          <img className='gift-image' src={giftImg5} alt="Фото подарка 5" />
          <h4 className="catalog-h4-text">Коробочка «Спасибо»</h4>
          <span className='catalog-span'>1 200₽</span>
          <button className='catalog-button'>Заказать</button>
        </div>
        <div className="gift">
          <img className='gift-image' src={giftImg6} alt="Фото подарка 6" />
          <h4 className="catalog-h4-text">Осенний сюрприз</h4>
          <span className='catalog-span'>1 500₽</span>
          <button className='catalog-button'>Заказать</button>
        </div> */}
      </section >
    </>
  )
}
