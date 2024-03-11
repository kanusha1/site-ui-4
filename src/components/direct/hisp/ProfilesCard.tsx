import React from 'react'
import { Box, Button, Divider, Typography, Toolbar, Card, Avatar } from '@mui/material'

interface DocsCardProps {
  smtpAddress: string
  emailAddress: string
  header: string
}
const ProfilesCard: React.FC<DocsCardProps> = ({ smtpAddress, emailAddress, header }) => {
  return (
    <Card
      sx={{
        height: 225,
        boxShadow: '-8px 0px 32px 0px rgba(0, 0, 0, 0.17)',
      }}
    >
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#001439' }}>
          {header}
        </Typography>
        <Avatar></Avatar>
      </Toolbar>
      <Divider />
      <Box display={'flex'} sx={{ flexDirection: 'column', margin: 2 }}>
        <Box display={'flex'} sx={{ justifyContent: 'space-between', marginBottom: 2 }}>
          <Box display={'flex'} sx={{ flexDirection: 'column', mr: 2 }}>
            <Typography variant="subtitle2">SUTE SMTP Address:</Typography>
            <Typography variant="body2">{smtpAddress}</Typography>
          </Box>
          <Box display={'flex'} sx={{ flexDirection: 'column' }}>
            <Typography variant="subtitle2">SUTE Email Address:</Typography>
            <Typography variant="body2">{emailAddress}</Typography>
          </Box>
        </Box>
        <Divider sx={{ marginY: 2 }} />
        <Button variant="outlined" color="primary" sx={{ alignSelf: 'start' }}>
          Show Report
        </Button>
      </Box>
    </Card>
  )
}

export default ProfilesCard
