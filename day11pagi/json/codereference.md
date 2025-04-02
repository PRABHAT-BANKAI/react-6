import {
  Box,
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Crypto = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [coin, setCoin] = useState({});
  const [search, setSearch] = useState("");
  const coinsPerPage = 10;
  const start = (page - 1) * coinsPerPage;
  const end = start + coinsPerPage;

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const currentItems = filteredItems.slice(start, end);

  return (
    <Box>
      <div style={{ display: "flex", padding: "20px", alignItems: "center" }}>
        {" "}
        <h1>Search</h1>
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search"
          width={"200px"}
          bgColor={"blue"}
          color="white"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "yellow",
        }}
      >
        <h3>Coin</h3>
        <div style={{ display: "flex", gap: "100px" }}>
          <h3>Price</h3>
          <h3>24h Change</h3>
          <h3>Market Cap</h3>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{coin.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image boxSize={"50px"} src={coin.image} />
            <p>market cap rank :{coin.market_cap_rank}</p>
            <p>current price :{coin.current_price}</p>
            <p>price change 24 hour:{coin.price_change_24h}</p>
            <p>total volume:{coin.total_volume}</p>
            <p>low 24 hour:{coin.low_24h}</p>
            <p>high 24 hour:{coin.high_24h}</p>
            <p>total supply:{coin.total_supply}</p>
            <p>max supply:{coin.max_supply}</p>
            <p>circulating supply:{coin.circulating_supply}</p>
            <p>all time high:{coin.ath}</p>
            <p>last updated Date:{coin.last_updated}</p>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box>
        {currentItems.map((el) => {
          return (
            <Box
              onClick={() => {
                onOpen();
                setCoin(el);
              }}
              key={el.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                backgroundColor: "grey",
                color: "white",
              }}
            >
              {" "}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Image boxSize={"50px"} src={el.image} />
                <div>
                  <h2>{el.symbol}</h2>
                  <p>{el.name}</p>
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "100px", alignItems: "center" }}
              >
                <h3>${el.current_price}</h3>
                <h3>{el.price_change_24h.toFixed(2)}%</h3>
                <h3>{el.market_cap}</h3>
              </div>
            </Box>
          );
        })}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        {" "}
        <Button
          isDisabled={page == 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          prev
        </Button>
        <h2>{page}</h2>
        <Button
          isDisabled={page >= 10}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          next
        </Button>
      </Box>
    </Box>
  );
};
