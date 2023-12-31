"use client"

import CustomPage from "@/components/CustomPage";
import { PageRouterEntity } from '@/types/page';
import Main from '@/components/Layout/Main/page';
import { usePathname } from 'next/navigation';
import routerLocal from '@/utils/router.json'
import { useEffect, useState } from "react";

const ToolboxPage = () => {
  const pathname = usePathname()
  const [navbar,setNavbar] = useState<PageRouterEntity[]>([])
  const [pageInfos,setPageInfos] = useState<PageRouterEntity>()
  /* 获取路由 */
  useEffect(()=>{
    setNavbar(routerLocal.navbar as unknown as PageRouterEntity[])
  },[])
  useEffect(()=>{
    const infos: PageRouterEntity =  navbar?.filter(n=>n.link===pathname)[0] as PageRouterEntity
    setPageInfos(infos)
  },[navbar, pathname])
  
  return (
    <Main>
      <CustomPage customInfo={pageInfos}/>
    </Main>
  )
};

export default ToolboxPage;
