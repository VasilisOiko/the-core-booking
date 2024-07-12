import { Card, Col, Divider, Row, Skeleton, SkeletonInput, Statistic, Title } from "@/app/components"
function WorkoutStatisticsSkeleton() {
  return (
    <>
        <SkeletonInput active/>
        <Divider />
        <Row gutter={[16, 16]}>
            
            <Col>
            <Card>
                <Statistic title={"Week with most workouts"} loading/>
            </Card>
            </Col>

            <Col>
                <Card>
                    <Statistic title="Most Workouts in a week" loading/>
                </Card>
            </Col>

            <Col>
            <Card>
                <Statistic title="Average Workouts per week" loading/>
            </Card>
            </Col>

        </Row>
    </>
  )
}

export default WorkoutStatisticsSkeleton