import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PurchaseCard from "../components/PurchaseCard";
import { getPurchases } from "../store/slices/purchases.slice";
import "../styles/purchases.css";

const Purchases = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchases());
  }, []);

  const purchases = useSelector((state) => state.purchases);
  console.log(purchases);

  return (
    <div className="purchases-container">
      <div className="purchases">
        {purchases?.map((purchase) => (
          <PurchaseCard key={purchase.id} infoPurchase={purchase} />
        ))}
      </div>
    </div>
  );
};

export default Purchases;
