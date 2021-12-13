import Profiles from '@components/browse/profiles'
import { useUser } from '@hooks/useUser'

function SelectProfileContainer() {
  const { user, setSelectedProfile } = useUser()

  return (
    <Profiles>
      <Profiles.Title>Who&apos;s watching?</Profiles.Title>
      <Profiles.List>
        <Profiles.User
          onClick={() =>
            setSelectedProfile({
              full_name: user?.full_name,
              avatar_url: user.avatar_url,
            })
          }
        >
          <Profiles.Picture src={user?.avatar_url} alt={user?.full_name} />
          <Profiles.Name>{user?.full_name}</Profiles.Name>
        </Profiles.User>
      </Profiles.List>
    </Profiles>
  )
}

export default SelectProfileContainer
