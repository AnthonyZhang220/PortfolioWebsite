import {
    EmailShareButton,
    FacebookShareButton,
    LineShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LineIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    m: 4,
};
export default function ShareModal({ projectdetails, shareOpen, handleShareClose }) {
    return (
        <Modal
            open={shareOpen}
            onClose={handleShareClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-overview"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Share
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: 2 }}>
                    <EmailShareButton url={projectdetails.WebsiteUrl}>
                        <EmailIcon round size={50} />
                    </EmailShareButton>
                    <FacebookShareButton url={projectdetails.WebsiteUrl} quote={projectdetails.title}>
                        <FacebookIcon round size={50} />
                    </FacebookShareButton>
                    <FacebookMessengerIcon round size={50} />
                    <LineShareButton url={projectdetails.WebsiteUrl}>
                        <LineIcon round size={50} />
                    </LineShareButton>

                    <LinkedinShareButton url={projectdetails.WebsiteUrl} title={projectdetails.title} summary={projectdetails.overview}>
                        <LinkedinIcon round size={50} />
                    </LinkedinShareButton>


                    <PinterestShareButton url={projectdetails.WebsiteUrl} media={projectdetails.thumbnails}>
                        <PinterestIcon round size={50} />
                    </PinterestShareButton>

                    <WeiboIcon round size={50} />

                    <RedditShareButton url={projectdetails.WebsiteUrl} title={projectdetails.title}>
                        <RedditIcon round size={50} />
                    </RedditShareButton>

                    <TelegramShareButton url={projectdetails.WebsiteUrl} title={projectdetails.title}>
                        <TelegramIcon round size={50} />
                    </TelegramShareButton>

                    <TwitterShareButton url={projectdetails.WebsiteUrl} title={projectdetails.title}>
                        <TwitterIcon round size={50} />
                    </TwitterShareButton>

                    <WhatsappShareButton url={projectdetails.WebsiteUrl} title={projectdetails.title}>
                        <WhatsappIcon round size={50} />
                    </WhatsappShareButton>

                    <WorkplaceShareButton url={projectdetails.WebsiteUrl} quote={projectdetails.overview}>
                        <WorkplaceIcon round size={50} />
                    </WorkplaceShareButton>
                </Box>
                <Button onClick={handleShareClose}>Close</Button>
            </Box>
        </Modal>

    )
}