import EventCard from 'components/EventCard'
import { useGetSheets } from 'repositories/subgraph.repository'

const items = [
  {
    token: {
      token_address: '0xD5123C9FB1206497E2e54fd1120AA2F896e273E9',
      token_id: '1',
      chain_id: 'mumbai',
    },
    title: 'Token 2049',
    users: 1,
    posts: 5,
  },
  {
    token: {
      token_address: '0xD5123C9FB1206497E2e54fd1120AA2F896e273E9',
      token_id: '2',
      chain_id: 'mumbai',
    },
    title: 'MadLabs Gathering',
    users: 2,
    posts: 6,
  },
]

const PageDashboard = () => {
  const { data: sheets } = useGetSheets({})
  console.log(sheets)

  return (
    <div className="bg-yellow-100 h-screen">
      <div className="grid gap-3 p-3">
        {items.map((item, index) => {
          return (
            <EventCard
              key={index}
              tokenAddress={item.token.token_address}
              chainId={item.token.chain_id}
              tokenId={item.token.token_id}
              title={item.title}
              onHandleShareClicked={() => {}}
              totalUser={item.users}
              totalPost={item.posts}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PageDashboard
