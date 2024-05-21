import { useQuery } from '@tanstack/react-query';
import fetchAnimalList from './fetchAnimalList.js';

export default function useAnimalList() {
    const results = useQuery([],fetchAnimalList);
    return [results?.data?.animals ?? [],results.status];
}