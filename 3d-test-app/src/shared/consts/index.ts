// tanstack react-query
export const STALE_TIME = 60 * 1000; // fresh => stale, 1 seconds => 1초 후에 fresh => stale로 상태 변경, 새로 데이터 가져오게 함
export const GC_TIME = 300 * 1000; // garbage collect, 5 seconds => 5초가 지나기 전에 staleTime이 안지났으면 캐시 데이터 보여줌
