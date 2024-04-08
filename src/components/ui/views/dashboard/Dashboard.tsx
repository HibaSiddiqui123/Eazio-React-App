import {
  AccessTime,
  Apps,
  Attachment,
  CalendarMonth,
  Dashboard as DashboardIcon,
  Dehaze,
  Download,
  FiberManualRecord,
  Flag,
  KeyboardArrowRight,
  PlayArrow,
  PlaylistAddCheck,
  Sort,
  TrendingUp,
  ViewHeadline,
} from "@mui/icons-material";
import {
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Link,
  List,
  ListItem,
  ListItemDecorator,
  Stack,
  Tab,
  TabList,
  TabProps,
  Tabs,
  Textarea,
  Typography,
} from "@mui/joy";
import { RoundIconButton } from "../../elements/buttons/IconButtons";

const DashboardTab = ({ children, ...rest }: TabProps) => (
  <Tab
    {...rest}
    variant="plain"
    indicatorInset
    color="primary"
    sx={{
      borderRadius: "1rem",
      py: 2,
      "&.Mui-selected": {
        backgroundColor: "transparent",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "transparent",
      },
    }}
  >
    {children}
  </Tab>
);

const AttachmentCard = () => (
  <Stack sx={{ alignItems: "center", rowGap: 3 }}>
    <Badge
      badgeContent={
        <Badge
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          badgeInset="14%"
          color="success"
        >
          <Avatar
            src="https://mui.com/static/images/avatar/2.jpg"
            alt="avatar-2"
          />
        </Badge>
      }
      variant="plain"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      badgeInset={"5%"}
      sx={{ "--Badge-paddingX": "0px" }}
    >
      <AspectRatio
        variant="outlined"
        ratio="3/4"
        sx={{
          width: 100,
          bgcolor: "background.level2",
          borderRadius: "md",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=600"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=600&dpr=2 2x"
          alt=""
        />
      </AspectRatio>
    </Badge>
    <Stack sx={{ justifyItems: "center", rowGap: 1 }}>
      <Typography level="title-sm" textAlign={"center"}>
        Frame6.jpg
      </Typography>
      <Typography level="body-xs" textAlign={"center"}>
        Sep 7 at 2:42 PM
      </Typography>
    </Stack>
  </Stack>
);

type ActivityListItemProps = {
  who?: string;
  activity: React.ReactNode;
  timestamp: string;
};

const ActivityListItem = ({
  who = "You",
  activity,
  timestamp,
}: ActivityListItemProps) => {
  const isString = typeof activity === "string";

  return (
    <ListItem>
      <ListItemDecorator>
        <Typography color="primary" level="body-sm" fontWeight="bold">
          {who}
        </Typography>
      </ListItemDecorator>
      <Stack
        direction="row"
        sx={{ flexGrow: 1, justifyContent: "space-between" }}
      >
        {isString && (
          <Typography level="body-sm" fontWeight="bold">
            {activity}
          </Typography>
        )}
        <Box sx={{ flexGrow: 1, display: "flex" }}>{!isString && activity}</Box>
        <Typography level="body-sm" fontWeight="bold">
          {timestamp}
        </Typography>
      </Stack>
    </ListItem>
  );
};

export const Dashboard = () => {
  return (
    <Stack>
      <Tabs variant="outlined" sx={{ borderRadius: "1rem" }}>
        <TabList>
          <DashboardTab>
            <PlaylistAddCheck /> List Task
          </DashboardTab>
          <DashboardTab>
            <DashboardIcon /> Boards
          </DashboardTab>
          <DashboardTab>
            <CalendarMonth /> Calendar
          </DashboardTab>
          <DashboardTab>
            <Sort /> Gantt
          </DashboardTab>
          <DashboardTab>
            <Dehaze /> Timeline
          </DashboardTab>
          <DashboardTab>
            <TrendingUp /> Activity
          </DashboardTab>
        </TabList>
        <Breadcrumbs
          separator={<KeyboardArrowRight />}
          aria-label="breadcrumbs"
        >
          <Link>Space</Link>
          <Link>Name Space</Link>
          <Link>Name Task</Link>
        </Breadcrumbs>
        <Divider />
        <Stack direction="row">
          <Stack>
            <Stack sx={{ flexGrow: 1, p: 3 }}>
              <form>
                <Stack rowGap={3}>
                  <FormControl>
                    <FormLabel sx={{ fontWeight: "bold" }}>Name Task</FormLabel>
                    <Input size="lg" variant="soft" placeholder="Name Task" />
                  </FormControl>
                  <FormControl>
                    <FormLabel sx={{ fontWeight: "bold" }}>
                      Description Task
                    </FormLabel>
                    <Textarea
                      minRows={5}
                      variant="soft"
                      placeholder="Description Task"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel sx={{ fontWeight: "bold" }}>
                      Sub tasks ToDo
                    </FormLabel>
                    <Input
                      placeholder="Type Sub Task"
                      variant="soft"
                      startDecorator={<FiberManualRecord />}
                      endDecorator={
                        <Stack
                          direction={"row"}
                          sx={{ columnGap: 2, padding: 1 }}
                        >
                          <Stack
                            direction={"row"}
                            sx={{ alignItems: "center", columnGap: 2 }}
                          >
                            <RoundIconButton>
                              <Flag />
                            </RoundIconButton>
                            <RoundIconButton>
                              <Attachment />
                            </RoundIconButton>
                            <RoundIconButton>
                              <AccessTime />
                            </RoundIconButton>
                          </Stack>
                          <Avatar size="sm" />
                          <Button>Save</Button>
                        </Stack>
                      }
                    />
                  </FormControl>
                  <Stack direction="row" justifyContent="start" gap={2}>
                    <Button size="sm">Add Task</Button>
                  </Stack>
                </Stack>
              </form>
            </Stack>
            <Divider />
            <Stack sx={{ flexGrow: 1, p: 3, rowGap: 3 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <Typography level="title-md">Attachments</Typography>
                <Stack direction="row" columnGap={1}>
                  <IconButton variant="plain">
                    <Apps />
                  </IconButton>
                  <IconButton variant="plain">
                    <ViewHeadline />
                  </IconButton>
                  <Button variant="soft" startDecorator={<Download />}>
                    Download All
                  </Button>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                sx={{ columnGap: 2, justifyContent: "space-between" }}
              >
                <AttachmentCard />
                <AttachmentCard />
                <AttachmentCard />
                <AttachmentCard />
              </Stack>
            </Stack>
          </Stack>
          <Divider orientation="vertical" />
          <Stack sx={{ flexGrow: 1 }}>
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-around",
                alignItems: "stretch",
                columnGap: 2,
                p: 2,
              }}
            >
              <Stack sx={{ flexGrow: 1, justifyContent: "space-between" }}>
                <Typography level="h4">CREATED</Typography>
                <Typography fontSize="0.75rem" fontWeight="bold">
                  Sep,01 9:06 am
                </Typography>
              </Stack>
              <Divider orientation="vertical" />
              <Stack sx={{ flexGrow: 1, justifyContent: "space-between" }}>
                <Typography level="h4">Time Tracked</Typography>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", columnGap: 1 }}
                >
                  <RoundIconButton variant="solid" color="success">
                    <PlayArrow />
                  </RoundIconButton>
                  <Typography fontSize="0.75rem" fontWeight="bold">
                    0:00
                  </Typography>
                </Stack>
              </Stack>
              <Divider orientation="vertical" />
              <Stack
                direction="row"
                sx={{
                  flexGrow: 1,
                  columnGap: 2,
                  justifyContent: "space-between",
                }}
              >
                <Stack sx={{ justifyContent: "space-between" }}>
                  <Typography level="h4">Start Date</Typography>
                  <Typography fontSize="0.75rem" fontWeight="bold">
                    Sep,01 9:06 am
                  </Typography>
                </Stack>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <KeyboardArrowRight />
                </Box>
                <Stack sx={{ justifyContent: "space-between" }}>
                  <Typography level="h4">Due Date</Typography>
                  <Typography fontSize="0.75rem" fontWeight="bold">
                    Sep,01 9:06 am
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider />
            <Stack
              sx={{
                p: 2,
              }}
            >
              <Typography level="title-md">Last Activity By Task</Typography>
              <List>
                <ActivityListItem
                  activity="Created This Task"
                  timestamp="Sep 3, 16:00pm"
                />
                <ActivityListItem
                  activity={
                    <>
                      <Typography level="body-sm" fontWeight="bold">
                        Assigned To:
                      </Typography>
                      <Typography
                        level="body-sm"
                        fontWeight="bold"
                        color="primary"
                      >
                        Kenneth Jordan
                      </Typography>
                    </>
                  }
                  timestamp="Sep 3, 15:00pm"
                />
                <ActivityListItem
                  activity="Change Due Date from 6 Days Ago, 11am to 6 days ago, 2pm"
                  timestamp="Sep 3, 14:00pm"
                />
                <ActivityListItem
                  activity="Change Due Date from 6 Days Ago, 11am to 6 days ago, 2pm"
                  timestamp="Sep 3, 14:00pm"
                />
                <ActivityListItem
                  activity="Change Due Date from 6 Days Ago, 11am to 6 days ago, 2pm"
                  timestamp="Sep 3, 14:00pm"
                />
                <ActivityListItem
                  activity="Change Due Date from 6 Days Ago, 11am to 6 days ago, 2pm"
                  timestamp="Sep 3, 14:00pm"
                />
              </List>
            </Stack>
            <Divider sx={{ marginTop: "3rem" }} />
            <Stack sx={{ p: 2, rowGap: 2 }}>
              <Typography level="title-md">Comments</Typography>
              <Stack
                direction="row"
                sx={{ columnGap: 2, bgcolor: "primary", alignItems: "center" }}
              >
                <Avatar size="sm" />
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    alignItems: "center",
                    columnGap: 1,
                  }}
                >
                  <Typography level="body-sm" fontWeight="bold">
                    You
                  </Typography>
                  <Textarea
                    sx={{ flexGrow: 1 }}
                    variant="soft"
                    placeholder="you commented"
                  />
                  <Typography level="body-sm" fontWeight="bold">
                    Just Now
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider sx={{ marginTop: "2rem" }} />
            <Stack direction="row" sx={{ p: 2 }}>
              <Stack
                direction="row"
                sx={{
                  flexGrow: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography level="title-sm">Comment on Task</Typography>
                <Button size="lg">Comment</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Tabs>
    </Stack>
  );
};
