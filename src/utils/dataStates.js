import { useEffect, useState } from "react";

export function CountQuantity() {
  const [count, setCount] = useState(0);

  return { count, setCount };
}

export function CountWishList() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/WishList")
      .then((res) => (res.status === 200 ? res.json() : console.log(res)))
      .then((data) => setCount(data.length));
  }, [count]);

  return { count, setCount };
}

export function CountCart() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/cartItems")
      .then((res) => (res.status === 200 ? res.json() : console.log(res)))
      .then((data) => setCount(data.length));
  }, [count]);

  return { count, setCount };
}
