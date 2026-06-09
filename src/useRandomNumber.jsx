import { useState } from "react";

export default function useRandomNumber() {
    const [page, setPage] = useState()
    const [firstNum, setFirstNum] = useState()
    const [secNum, setSecNum] = useState()

    function randomize() {
        setPage(Math.floor(Math.random() * 9) + 1)

        const first_num = Math.floor(Math.random() * 19) + 1
        setFirstNum(first_num)

        setSecNum(first_num + 7)
    }

    return { page, firstNum, secNum, randomize }
}